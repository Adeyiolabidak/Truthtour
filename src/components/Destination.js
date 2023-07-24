import DestinationData from "./DestinationData"
import "./DestinationStyle.css"
import obudu1 from "../Images/obu3.jpg"
import obudu2 from "../Images/obu4.jpg"
import olumo from "../Images/olumo.jpg"
import Rock1 from "../Images/Rock1.jpg"
import agodi1 from "../Images/agodi1.jpg"
import agodi2 from "../Images/agodi2.jpg"
import kaj1 from "../Images/kaj1.jpg"
import kaj2 from "../Images/kaj2.jpg"

const Destination = () => {
    return(
        <div className="destination">
            <h1>Popular Destination</h1>
            <p>Tours gives you the chance to have fun and energetic Activity Tourism course. Which includes climbing, sailing,
                 going on course trips and more; 
                exploring the wide range of activity tourism that Nigeria has to offer. 
                Growth areas include golf, business tourism, sailing, mountain biking, cruises and adventure tourism.</p>
               
                <DestinationData 
                className = "first-des"
                heading="Obudu Cattle Ranch"
                text= "Above the sea level on the Oshie Ridge of the famous Sankwala Mountains sits majestically the Obudu Mountain
                 Resort The temperate climate, breathtaking views, idyllic tranquility and beautiful scenery has made 
                 this resort one of the famous tourists’ sites in Nigeria and it is located at Obudu, Cross River State!"
                 img1={obudu1}
                 img2={obudu2}
                 />

                <DestinationData 
                className = "first-des-reverse"
                heading="Olumo Rock"
                text= "Any visit to the city of Abeokuta would be incomplete without stopping by at the ?
                fortress of Abeokuta?; Olumo Rock. No surprise that this rock is located in Abeokuta, as the name 
                ?Abeokuta? itself means ?under the rock? as has been one of the choice tourist attractions in Nigeria.
                Olumo Rock has long served as a rock of offense and a fortress for the people of Egba Land,
                since the 19th century.  At Olumo Rock, you would be treated to attractions like natural tunnels,
                unusual trees, natural cantilevers, gardens on the rock, 
                broken pathways, monuments of the belief system of the rock?s primeval settlers"
                 img1={olumo}
                 img2={Rock1}
                 />

                 <DestinationData 
                className = "first-des"
                heading="Agodi Gardens"
                text= "A beautiful park in the city of Ibadan which has risen to become one of the top tourist attractions
                in the country. Also called Agodi Botanical Gardens, Agodi Gardens, Ibadan, the site is a serene 
                environment on 150 acres of land. It is usually patronized by families during festive periods
                and weekends. Its peaceful and calm environment makes 
                it a perfect destination for you to take a break from the hassle and 
                reevaluate life values or hang out with friends and family. From the water parks to the animal 
                enclosure or even just walking through the garden paths, Agodi Gardens is sure to make you forget 
                about reality!"
                 img1={agodi1}
                 img2={agodi2}
                 />

                 <DestinationData 
                className = "first-des-reverse"
                heading="Kajuru Castle"
                text= "Luxury Medieval-German style villa, built over 3 decades ago located in Kaduna State, Nigeria.
                The villa is designed with bedrooms modeled after dungeons and several towers with crenelated walls. 
                The medieval theme is seen throughout the castle, it even has a portcullis (the vertically closing gate)
                 with a crocodile pit. The castle includes a guest tower with  4 rooms and the main building 
                 with a knights?  hall and a master suite ( also known as the ?landlord?s residence?).
                There?s an outdoor swimming pool for cooling off on hot days and a barbeque spot right by the pool.
                From the pool area and most of the castle windows, you will enjoy a fascinating view of the 
                surrounding mountains and inselbergseven just walking through the garden paths. "
                 img1={kaj1}
                 img2={kaj2}
                 />

                 
                 
               
        </div>
       
    )
}

export default Destination