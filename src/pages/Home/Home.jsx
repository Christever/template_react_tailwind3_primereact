import Form from "@/components/Form/Form";
import FormField from "@/components/Form/FormField";
import { authSchema } from "@/schemas/authSchema";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";

export default function Home() {
  const onSubmit = () => {};
  return (
    <div className="container1">
      <div className="m-5">
        <h1 className="h1">Accueil</h1>
        <div className="w-[600px]  mx-auto mt-10">
          <Form
            className="flex flex-col gap-5"
            schema={authSchema}
            defaultValues={{ email: "" }}
          >
            <FormField component={InputText} name={"email"} />
            <div className="w-full">
              <FormField
                component={Password}
                name={"password"}
                placeholder="Votre mot de passe"
                toggleMask
                feedback={false}
                // promptLabel="Choisissez votre mot de passe"
                // weakLabel="Trop simple"
                // mediumLabel="Moyen"
                // strongLabel="Fort"
              />
            </div>
            <Button label="Continuer" className="w-full" type="submit"/>
          </Form>
        </div>
      </div>
    </div>
  );
}
