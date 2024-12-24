import AdminNav from "./Component/AdminNav"
import Container from "./Component/Container"
import AdminFooter from "./Component/AdminFooter"
import SideNav from "./Component/SideNav"
import Content from "./Component/Content"

function AdminPage() {
  return (
    <Container>
      <AdminNav/>
        <div className='flex-grow'>
                  <div className='container mx-16'>
                      <div className='flex justify-start mt-10'>
                          <SideNav />
                          <Content />
                      </div>
                  </div>
          </div>
      <AdminFooter/>
    </Container>
  )
}

export default AdminPage