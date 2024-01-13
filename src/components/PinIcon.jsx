import Image from "next/image";
import LocationIcon from "../../public/icons8-location-50.png";
export default function PinIcon() {
  return (
    <div>
      <Image src={LocationIcon} alt="Location" width={25} height={25} />
    </div>
  );
}
