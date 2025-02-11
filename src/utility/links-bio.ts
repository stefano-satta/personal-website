import myInfo from "@/utility/my-info";
import icon from "@/utility/icon";

const LinksBio: ILinksBio[] = [
    {title: 'Hire Me!', link: `mailto:${myInfo.email}?subject=Project info`, icon: icon.mail,  blankTarget: true},
    {title: 'Website', link: '/', icon: icon.homepage,  blankTarget: false},
    {title: 'LinkedIn', link: myInfo.linkedin, icon: icon.linkedin,  blankTarget: true},
    {title: 'Notion CV', link: myInfo.notionCV, icon: icon.cv,  blankTarget: true}
];

export default LinksBio;