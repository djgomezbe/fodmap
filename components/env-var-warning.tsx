import Link from "next/link";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

export function EnvVarWarning() {
  return (
    <div className="flex gap-4 items-center">
      <Badge variant={"outline"} className="font-normal">
        Meld je aan om verder te gaan
      </Badge>
      <div className="flex gap-2">
        <Button
          asChild
          size="sm"
          variant={"outline"}
          className="opacity-75 cursor-none pointer-events-none"
        >
          <Link href="/sign-in">Aanmelden</Link>
        </Button>
        <Button
          asChild
          size="sm"
          variant={"default"}
          className="opacity-75 cursor-none pointer-events-none"
        >
          <Link href="/sign-up">Registreer</Link>
        </Button>
      </div>
    </div>
  );
}
