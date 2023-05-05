import Component2 from "../component2/component2"
import "./Component1.css"
function Component1() {
    return(
        <>
        <div class="education">
  <h2 className="pg1">Education</h2>
  <ul>
    <li>
      <h3>Bachelor's Degree in Civil engineering</h3>
      <p><strong>Tontadarya college of engineering</strong>, Gadag, karnataka</p>
      <p>Graduated: Agust 2022</p>
    </li>
    <li>
      <h3>Higher Secondary Education</h3>
      <p><strong>prarthana science pu colege</strong>, Bagalkot, Karnataka</p>
      <p>Graduated: May 2018</p>
    </li>
  </ul>
</div>
<Component2/>
        </>
        
    )
}

export default Component1