import img from './card.png';
import './App.css';

function App() {
  return (
    <div className='container'>
    <form action=""> 

<div class="row">

    <div className="col">

        <h3 className="title">billing address</h3>

        <div className="inputBox">
            <span>full name :</span>
            <input type="text" placeholder="Write Your Name"/>
        </div>
        <div className="inputBox">
            <span>email :</span>
            <input type="email" placeholder="example@example.com"/>
        </div>
        <div className="inputBox">
            <span>Address :</span>
            <input type="text" placeholder="room - street - locality"/>
        </div>
        <div className="inputBox">
            <span>City :</span>
            <input type="text" placeholder=""/>
        </div>

        <div className="flex">
            <div className="inputBox">
                <span>state :</span>
                <input type="text" placeholder=""/>
            </div>
            <div className="inputBox">
                <span>zip code :</span>
                <input type="text" placeholder="123 45"/>
            </div>
        </div>

    </div>

    <div className="col">

        <h3 className="title">payment</h3>

        <div className="inputBox">
            <span>cards accepted :</span>
            <img src={ img } alt="" />
        </div>
        <div className="inputBox">
            <span>name on card :</span>
            <input type="text" placeholder=""/>
        </div>
        <div className="inputBox">
            <span>credit card number :</span>
            <input type="number" placeholder="1111-2222-3333-4444"/>
        </div>
        <div className="inputBox">
            <span>exp month :</span>
            <input type="text" placeholder=""/>
        </div>

        <div className="flex">
            <div className="inputBox">
                <span>exp year :</span>
                <input type="number" placeholder=""/>
            </div>
            <div className="inputBox">
                <span>CVV :</span>
                <input type="text" placeholder="XXX"/>
            </div>
        </div>

    </div>
    <p><input type="checkbox" /> I agree to terms and conditions</p>
</div>
<br/>
<input type="submit" value="MAKE  a  PAYMENT" class="submit-btn"/>

</form>
    </div>
  )
}


export default App;
