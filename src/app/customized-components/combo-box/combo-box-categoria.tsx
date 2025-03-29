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

type setCategory = (categoria:string) => void;
type setCategoriesDropdownUrl = (url: string) => void;

export function ComboboxCategoria(
  props:{
    fetchApi: string,
    producer: string,
    setCategory: setCategory,
    setCategoriesDropdownUrl: setCategoriesDropdownUrl
  }
  
) {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")

  type Categoria = {
    id: number;
    categoria: string;
  };



  const [data, setData] = useState<Categoria[]| null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  console.log('COMBO-BOX-CATEGORIA:  '+props.fetchApi)

  useEffect(() => {
    // Fetch data from the API route
    fetch(props.fetchApi)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        //console.log(response)
        return response.json() as Promise<Categoria[] >;
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
              ? data.find((Categoria) => Categoria.categoria === value)?.categoria
              : "todas as categorias"}
            <ChevronsUpDown className="opacity-50" />
          </Button>
        </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0 bg-gray-900 text-white">
        <Command>
          <CommandInput placeholder={'selecionar categoria'} />
          <CommandList>
            <CommandEmpty>Não encontrado</CommandEmpty>
            <CommandGroup>
              {data.map((Categoria) => (
                <CommandItem
                  key={Categoria.categoria}
                  value={Categoria.categoria}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue)
                    setOpen(false)
                    console.log("props.atualizarCategoria" + value)
                    props.setCategory(currentValue === value ? "" : currentValue)
                  }}
                >
                  {Categoria.categoria}
                  <Check
                    className={cn(
                      "ml-auto",
                      value === Categoria.categoria ? "opacity-100" : "opacity-0"
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
