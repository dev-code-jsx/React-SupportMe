import { Card } from '../../components/Card'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { Label } from '../../components/Label'
import logo from '../../assets/img/logo.jpeg'

export const Auth = () => {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <Card className="mx-auto w-full sm:w-11/12 md:w-3/4 lg:w-1/2 xl:w-1/3 h-96 flex items-center">
                <div className="flex flex-col items-center gap-4 p-6 w-full">
                    <img src={logo} width={64} height={64} alt="Company Logo" className="rounded-full" />
                    <h2 className="text-2xl font-bold text-white">SupportMe</h2>
                    <div className="space-y-4 w-full">
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" type="email" placeholder="m@example.com" required />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="password">Password</Label>
                            <Input id="password" type="password" required />
                        </div>
                        <Button type="submit" className="w-full">
                            Iniciar Sesión
                        </Button>
                    </div>
                </div>
            </Card>
        </div>
    );
}