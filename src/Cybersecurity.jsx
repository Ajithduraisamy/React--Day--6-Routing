import Card from "./Card"

function Cybersecurity({data}) {
  return (
    <div className="container">
      <div className="row">

        <h2 className="course">Cyber Security</h2>

        {data.map((items,index)=> {return <Card items={items} key={index}/>})}

      </div>
    </div>
  )
}

export default Cybersecurity