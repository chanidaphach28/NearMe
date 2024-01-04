import Style from "../NearMe/nearme.module.css";
import dynamic from "next/dynamic";

const Map = dynamic(() => import("@/components/MarkerMap/map"),{
    ssr: false
})



export default function Home() {
  
  return (
    <>
        <div className={Style.bor}>
            <div className={Style.text}>map nearme</div>
        </div>
      
    
     <Map/>
    </>
  );
}
