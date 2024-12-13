import FloatingShape from "./components/floatingShape"

function App() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-blue-950 flex items-center justify-center relative overflow-hidden">
      <FloatingShape color="bg-blue-500" size="w-64 h-64" top="-5%" left="10%" delay={0}/>
      <FloatingShape color="bg-blue-800" size="w-48 h-48" top="50%" left="80%" delay={5}/>
      <FloatingShape color="bg-blue-200" size="w-32 h-32" top="40%" left="2%" delay={2}/>
    </div>
  )
}

export default App
