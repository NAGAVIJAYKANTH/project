import React from 'react'

function Details() {
  return (
    <div className='chats'>
      <div className="userChat">
        <img src="https://media.istockphoto.com/id/1208790371/photo/healthy-fresh-rainbow-colored-fruits-and-vegetables-background.jpg?b=1&s=612x612&w=0&k=20&c=eM1rU5JMiAMUG3_4qTbfcqc6dsx4_9hLmnwnbOsMUvQ="alt=""/>
        <div className="userChatInfo">
            <span>Food Items</span>
            <p> Fruits,vegetables,Pulses,Serials,Leafiy vegetables.</p>
        </div>
     </div>


     <div className="userChat">
        <img src="https://i.pinimg.com/originals/10/31/7b/10317b1eb2d6df590aca903ec599ba2d.jpg"alt=""/>
        <div className="userChatInfo">
            <span>Balanced Diet
            </span>
            <p>A balanced diet contains an adequate amount of all the nutrients required by the body to grow, remain healthy and be disease-free. In addition, a healthy, balanced diet provides the necessary energy requirement, protects against vitamin, mineral, and other nutritional deficiencies, and builds up immunity.</p>
        </div>
     </div>


     <div className="userChat">
        <img src="https://www.shutterstock.com/image-photo/fruits-vegetables-calories-labels-260nw-1050656288.jpg"alt=""/>
        <div className="userChatInfo">
            <span>calories</span>
            <p>A calorie is a measurement, just like a teaspoon or an inch. Calories are the amount of energy released when your body breaks down (digests and absorbs) food. The more calories a food has, the more energy it can provide to your body.</p>
        </div>
     </div>

    </div>
  )
}

export default Details