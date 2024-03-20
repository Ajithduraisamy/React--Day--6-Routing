import Card from "./Card"

function All({data}) {
  return (
    <div className="container">
      <div className="row">

        <h2 className="course">All Courses</h2>

        {data.map((items,index)=> {return <Card items={items} key={index}/>})}

      </div>
    </div>
  )
}

export default All