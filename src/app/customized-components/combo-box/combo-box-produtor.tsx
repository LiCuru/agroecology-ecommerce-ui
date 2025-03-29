"use client"
import '../../globals.css'
import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { useEffect, useState } from 'react'

type setProducer = (produtor:string) => void;
type setCategory = (category:string) => void;
type setValue = (url: string) => void;

export function ComboboxProdutor(
  props:{
    fetchApi: string,
    setProducer: setProducer,
    setCategory: setCategory,
    setValue: setValue
  }
  
) {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")


  type Produtor = {
    id: number;
    produtor: string;
  };



  const [data, setData] = useState< Produtor[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  console.log('COMBO-BOX-PRODUTOR:  '+props.fetchApi)

  useEffect(() => {
    // Fetch data from the API route
    fetch(props.fetchApi)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        //console.log(response)
        return response.json() as Promise<Produtor[]>;
      })
      .then((data) => {
        setData(data);
        //console.log(data)
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [props.fetchApi]);

  if (loading) return 'Loading...';
  if (error) return error;
  if (data != null && data.constructor === Array)
  return (
    <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-[200px] justify-between "
          >
            {value
              ? data.find((Produtor) => Produtor.produtor === value)?.produtor
              : "todos os produtores"}
            <ChevronsUpDown className="opacity-50" />
          </Button>
        </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0 bg-gray-900 text-white">
        <Command>
          <CommandInput placeholder={'selecionar produtor'} />
          <CommandList>
            <CommandEmpty>Não encontrado</CommandEmpty>
            <CommandGroup>
              {data.map((Produtor) => (
                <CommandItem
                  key={Produtor.id}
                  value={Produtor.produtor}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue)
                    setOpen(false)
                    props.setProducer(currentValue === value ? "" : currentValue)
                    props.setCategory('')
                    console.log(`props.atualizarProdutor ${currentValue}`)
                    props.setValue('')
                  }}
                >
                  {Produtor.produtor}
                  <Check
                    className={cn(
                      "ml-auto",
                      value === Produtor.produtor ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
