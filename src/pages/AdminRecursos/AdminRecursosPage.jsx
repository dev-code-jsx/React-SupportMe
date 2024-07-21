import { ResourceGridA } from "../resourcesAdmin/ResourceAdmin";
import { FormResourceAdmin } from "../resourceFormAdmin/FormResourceAdmin";

export const AdminRecursosPage = () =>{
    return(
        <div>
            <FormResourceAdmin/>
            <ResourceGridA/>
        </div>
    )
}