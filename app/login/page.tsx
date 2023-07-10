import Button from "@/components/UI/Button";
import TextInput from "@/components/UI/TextInput";

export default function LoginPage() {

    return <div className="container w-full h-screen mx-auto px-4 flex flex-col justify-center items-center">

        <div className="flex flex-col justify-between w-auto h-200 py-50">
            <h1 className="text-white">Login here!</h1>
            <TextInput placeholder="Username"></TextInput>
            <TextInput placeholder="Password"></TextInput>
            <Button>Login</Button>
        </div>

    </div>
}