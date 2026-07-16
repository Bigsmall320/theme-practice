import PageHeader from '../components/ui/PageHeader.jsx'
import Placeholder from '../components/ui/Placeholder.jsx'


export default function Dashboard() {
  return (
    <>
      <PageHeader
        title="Dashboard"
        description="An overview of your portfolio at a glance."
      />

      <Placeholder>
        Recent activity, charts, and upcoming tasks will appear here.
      </Placeholder>
    </>
  )
}
