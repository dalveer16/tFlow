import Layout from "./components/layout/Layout";
import { SidebarProvider } from "./components/ui/sidebar";

function App() {
  return (
    <>
      <SidebarProvider>
        <Layout>
          <h2>hi</h2>
        </Layout>
      </SidebarProvider>
    </>
  );
}

export default App;
