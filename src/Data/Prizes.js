import TravelIcon from "../Assets/Images/travel-icon-sm.png";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import TicketIcon from "../Assets/Images/ticket-icon-sm.png";

export const Prizes = [
  { id: 1, title: "The Festival in Malta-ს საგზური", img: TravelIcon },
  {
    id: 2,
    title: `სპეციალური ტურნირის „Cashgame Sharks” ბილეთი, სადაც გათამაშდება The Festival in Malta-ს საგზური`,
    img: TicketIcon,
  },
  {
    id: 3,
    title: "ტექნიკის მაღაზიის ვაუჩერი",
    icon: <CardGiftcardIcon fontSize="small" sx={{ color: "#fff" }} />,
  },
];
