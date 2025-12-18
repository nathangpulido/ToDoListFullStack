import CreateTask from "@/components/CreateTask";
import ListTask from "@/components/ListTasks";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen justify-center items-center space-y-4">
      <CreateTask />
      <ListTask />
    </div>
  );
};

export default Home;
