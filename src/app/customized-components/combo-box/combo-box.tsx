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

type atualizarProdutor = (produtor: string) => void;

export function ComboboxDemo(
  props:{
    tipo: string,
    fetchApi: string,
    atualizarProdutor: atualizarProdutor,
    produtor: string


  }
  
) {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")


  type Produtor = {
    id: number;
    produtor: string;
  };

  type Categoria = {
    id: number;
    categoria: string;
  };



  const [data, setData] = useState< Produtor[] | Categoria[]| null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  console.log(props.fetchApi)

  useEffect(() => {
    // Fetch data from the API route
    fetch(props.fetchApi)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        //console.log(response)
        return response.json() as Promise<Produtor[]| Categoria[] >;
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
      {props.tipo === 'produtor' ? // PRODUTOR
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-[200px] justify-between "
          >
            {value
              ? data.find((framework) => framework.produtor === value)?.produtor
              : "todos os produtores"}
            <ChevronsUpDown className="opacity-50" />
          </Button>
        </PopoverTrigger>
        : // CATEGORIA DO PRODUTO
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-[200px] justify-between "
          >
            {value
              ? data.find((framework) => framework.categoria === value)?.categoria
              : "todas as categorias"}
            <ChevronsUpDown className="opacity-50" />
          </Button>
        </PopoverTrigger>
      }
      <PopoverContent className="w-[200px] p-0 bg-gray-900 text-white">
        <Command>
          <CommandInput placeholder={'selecionar ' + props.tipo} />
          <CommandList>
            <CommandEmpty>Não encontrado</CommandEmpty>
            <CommandGroup>
              {data.map((framework) => (
                props.tipo === 'produtor' ? // PRODUTOR
                <CommandItem
                  key={framework.id}
                  value={framework.produtor}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue)
                    setOpen(false)
                    props.atualizarProdutor(framework.produtor)
                  }}
                >
                  {framework.produtor}
                  <Check
                    className={cn(
                      "ml-auto",
                      value === framework.produtor ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
                : // CATEGORIA DO PRODUTO
                <CommandItem
                  key={framework.categoria}
                  value={framework.categoria}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue)
                    setOpen(false)
                  }}
                >
                  {framework.categoria}
                  <Check
                    className={cn(
                      "ml-auto",
                      value === framework.categoria ? "opacity-100" : "opacity-0"
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
