import "./TripStyles.css"
import TripData from "./TripData";
import lekki from "../Images/lekki1.jpg"
import shrine from "../Images/shrine.jpg"
import eleko from "../Images/Eleko.jpg"

function Trip(){
    return(
        <div className="trip">
            <h1>Recent Trips</h1>
            <p>Discover unique destination using Google Maps</p>
        <div className="tripcard">
            <TripData
            image={lekki}
            heading= "Lekki Conservation Centre"
            text=" Lagos is one of the best nature reserves in Nigeria. This conservation and relaxation center offers
             a breath of fresh air and an escape from the forever buzzing city of Lagos.  The 21-year-old conservation
            center cum nature hub, which covers an area of 78 hectares, is run and managed by 
            the Nigerian Conservation Foundation (NCF). Generally regarded as an icon of nature conservation, 
            Lekki Conservation Centre represents the flagship project of Nigeria Conservation Foundation 
            for the preservation of unique biodiversity, scenic, natural, scientific recreational values
             of the coastal environs of western Nigeria!"
            />

            <TripData
            image={eleko}
            heading= "Eleko Beach"
            text="Eleko Beach offers a peaceful retreat for privacy seekers or couples looking to enjoy a good time away
             from the hustle of Lagos. This public beach,  located close to La Campagne Tropicana, offers private beach
              features bamboo huts. It is also less rowdy than other public beaches in Lagos and considered to be cleaner.
               It's definitely one of the few tourist attractions to offer such services."
            />

            <TripData
            image={shrine}
            heading= "New Afrika Shrine"
            text=" The New Afrika Shrine, an open-air entertainment center located in Ikeja, Lagos State.
             It serves as the host location of the annual Felabration music festival. 
             Currently managed by Femi Kuti and Yeni Anikulapo-Kuti. Serves as a  replacement of the old Afrika 
             Shrine created in 1970 by Fela Kuti until it was burnt down in 1977. The New Afrika Shrine
            showcases photo galleries of Fela and musical performances by Femi Kuti and Seun Kuti. 
            For wholesome tourism in Nigeria, visit the Fela Shrine."
            />

        </div>
        </div>
    )
}

export default Trip;