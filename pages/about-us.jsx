import useColorizeWord from "@/hooks/useColorizeWord";
import Image from "next/image";
import ArrowIcon from '../public/icons/rightArrow.svg'
import Bredcramp from "@/components/Bredcramp";
import MainButton from "@/components/Button";
import GalleryComponent from "@/components/Gallery";
import LinkButton from "@/components/LinkButton";

export default function About() {
    const aboutTitle = useColorizeWord('Brief about us', 1, 'colloeredWordMain');
    const galeryTitle = useColorizeWord('Our Gallery', 0, 'colloeredWordMain');
    const partnersTitle = useColorizeWord('Our Partners', 0, 'colloeredWordMain');
    const partners = [1,2,5,4,8,93,63,2,5,8,5,2]
    return (
      <div className="about">
          <Bredcramp/>
          <Image className="about__header" src="images/aboutUsBg.png" alt="" />
          <div className="about__info">
            <div className="about__content">
              
              <h2 className="about__info--title" dangerouslySetInnerHTML={{ __html: aboutTitle }}></h2>
                <p className="about__info--desc"> All steps should be aimed at solving the problems at the core providing the opportunity to create added value through work. Foreign Policy: The sovereignty and independence of the country and foreign policy of the Republic of Armenia is paramount. Establishing good-neighbourly and dignified relations with immediate neighbours should be a guarantee of regional peace. The Republic of Armenia must be a reliable partner in relations with global powers. The effective use of the potential of Diaspora structures can be used for foreign policy purposes. One of the most important steps of foreign policy should be to reduce the impact of international-regional events on Armenia, to increase our influence on those events. The common good that underlies bilateral relations must reduce the impact of objective, subjective issues and contradictions.The effective use of the potential of Diaspora structures can be used for foreign policy purposes. One of the most important steps of foreign policy should be to reduce the impact of international-regional events on Armenia, to increase our influence on those events. The common good that underlies bilateral relations must reduce the impact of objective, subjective issues and contradictions.
                </p>
                <div className="about__actions">
                  <MainButton text="Explore" withIcon={true} explore={true}/>
                  <LinkButton text="Contact with us"/>
                </div>
            </div>
            <h2 className="about__gallery--title" dangerouslySetInnerHTML={{ __html: galeryTitle }}></h2>
            <p className="about__gallery--desc">All steps should be aimed at solving the problems at the core providing the opportunity to create added value through work. Foreign Policy: The sovereignty and independence of the country and </p>
            <GalleryComponent/>
            <h2 className="about__partner--title" dangerouslySetInnerHTML={{ __html: partnersTitle }}></h2>
            <div className="about__partner">
             {partners.map((item, i)=>{
                return(
                  <div key={i}  className="partner-img">
                      <Image src="icons/partner.svg" alt="partner"/>   
                      <p>We trust</p>
                  </div>
                )
             }) }
            </div>
          </div>
      </div>
    );
  }
    