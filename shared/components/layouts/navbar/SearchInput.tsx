import { LucideSearch } from "lucide-react";
import { Button } from "../../ui/button";
import { ButtonGroup } from "../../ui/button-group";
import { Field } from "../../ui/field";
import { Input } from "../../ui/input";

export function SearchInput() {
  return (
    <Field className="max-w-6/12 hover:shadow-none">
      <ButtonGroup>
        <Input id="input-button-group" placeholder="Type to search..." />
        <Button variant="outline" className="bg-blue-400 hover:bg-blue-800 hover:text-white text-white">
          <LucideSearch />  
        </Button>
      </ButtonGroup>
    </Field>
  )
}

