import { LucideSearch } from "lucide-react";
import { Button } from "../../ui/button";
import { ButtonGroup } from "../../ui/button-group";
import { Field } from "../../ui/field";
import { Input } from "../../ui/input";

interface SearchInputProps {
  placeholder: string;
}

export function SearchInput({ placeholder }: SearchInputProps) {
  return (
    <Field className="max-w-6/12 hover:shadow-none">
      <ButtonGroup>
        <Input id="input-button-group" placeholder={placeholder} />
        <Button variant="outline" className="bg-blue-400 hover:bg-blue-800 hover:text-white text-white">
          <LucideSearch />  
        </Button>
      </ButtonGroup>
    </Field>
  )
}

