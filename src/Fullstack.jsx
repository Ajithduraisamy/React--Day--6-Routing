import Card from "./Card"
function Fullstack({obj}) {
  return (
    <div className="container">
      <div className="row">

        <h2 className="course">Full Stack Development</h2>

        {obj.map((items,index)=> {return <Card items={items} key={index}/>})}

      </div>
    </div>
  )
}

export default Fullstack