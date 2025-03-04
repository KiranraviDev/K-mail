import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";

function App() {
  return (
    <>
      <div className="text-center flex justify-center items-center h-screen">
        <div className="space-y-4">
          <Input />
          <Input />
          <Button>Submit</Button>
        </div>
      </div>
    </>
  );
}

export default App;
