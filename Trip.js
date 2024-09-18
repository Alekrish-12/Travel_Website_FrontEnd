import "./index.css";
import TripData from "./TripData";
import Trip1 from "./assets/img7.jpg"
import Trip2 from "./assets/img8.jpg"
import Trip3 from "./assets/img9.jpg"


function Trip(){
    return(
        <div className="trip">
            <h1>Recent Trip</h1>
            <p>You can discover unique
                destination using Google Map.
            </p>
            <div className="tripcard">
                <TripData
                image={Trip1}
                heading="Trip in Indonesia"
                text="Indonesia, Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo aliquam quia voluptates aut,autem repudiandae Nemo aliquam quia voluptates aut,autem repudiandae repellat enim fugiat cum ea earum similique.Nemo aliquam quia voluptates aut,autem repudiandae repellat enim fugiat cum ea earum similique. Cupiditate error aliquam culpa distinctio, repellat enim fugiat cum ea earum similique. Nemo aliquam quia voluptates aut,autem repudiandae repellat enim fugiat cum ea earum similique.Cupiditate error aliquam culpa distinctio, sapiente commodi velit!"
            />

            <TripData
                image={Trip2}
                heading="Trip in Malaysia"
                text="Malaysia, Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo aliquam quia voluptates aut,autem repudiandae Nemo aliquam quia voluptates aut,autem repudiandae repellat enim fugiat cum ea earum similique.Nemo aliquam quia voluptates aut,autem repudiandae repellat enim fugiat cum ea earum similique. Cupiditate error aliquam culpa distinctio, repellat enim fugiat cum ea earum similique. Nemo aliquam quia voluptates aut,autem repudiandae repellat enim fugiat cum ea earum similique.Cupiditate error aliquam culpa distinctio, sapiente commodi velit!"
            />

            <TripData
                image={Trip3}
                heading="Trip in France"
                text="France, Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo aliquam quia voluptates aut,autem repudiandae Nemo aliquam quia voluptates aut,autem repudiandae repellat enim fugiat cum ea earum similique.Nemo aliquam quia voluptates aut,autem repudiandae repellat enim fugiat cum ea earum similique. Cupiditate error aliquam culpa distinctio, repellat enim fugiat cum ea earum similique. Nemo aliquam quia voluptates aut,autem repudiandae repellat enim fugiat cum ea earum similique.Cupiditate error aliquam culpa distinctio, sapiente commodi velit"
            />
            </div>
        </div>
    );
}

export default Trip;