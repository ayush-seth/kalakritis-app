import { ProfileSettings } from "@/components/settings/profile-settings";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Container } from "@/components/ui/container";
import { cn } from "@/utils";
import { Tab } from "@headlessui/react";
import {
  IconAddressBook,
  IconArrowLeft,
  IconHeart,
  IconKey,
  IconTruck,
  IconUser,
} from "@tabler/icons-react";
import { useWindowSize } from "@uidotdev/usehooks";
import { Frank_Ruhl_Libre } from "next/font/google";
import { Fragment, useState } from "react";

const CRUMBS = [
  {
    name: "Account",
    href: "/profile",
  },
];

const TABS = [
  {
    name: "My Profile",
    icon: <IconUser />,
  },
  {
    name: "Password",
    icon: <IconKey />,
  },
  {
    name: "My Wishlist",
    icon: <IconHeart />,
  },
  {
    name: "My Orders",
    icon: <IconTruck />,
  },
  {
    name: "My Address",
    icon: <IconAddressBook />,
  },
];

const getTabName = (index: number) => TABS[index].name;

const font = Frank_Ruhl_Libre({ weight: ["500"], subsets: ["latin"] });

const ProfilePage = () => {
  const { width } = useWindowSize();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const isMobile = width! < 768;

  return (
    <Container>
      <Breadcrumbs items={CRUMBS} className="hidden md:block" />
      <IconArrowLeft
        className="mb-8 text-accent-700 md:hidden"
        onClick={() => setMenuOpen(false)}
      />
      <h1
        className={`text-accent-700 ${font.className} mt-8 text-2xl font-medium`}
      >
        {menuOpen && isMobile ? getTabName(activeTabIndex) : "My Account"}
      </h1>
      <span className="mt-3 block font-medium">Rose Singh</span>
      <div className="-mx-4 mt-6 border-y-[0.4px] border-black">
        <Tab.Group selectedIndex={activeTabIndex} onChange={setActiveTabIndex}>
          <div className="md:grid md:grid-cols-[300px,1fr] md:gap-4">
            <Tab.List
              className={cn(
                "flex cursor-pointer flex-col gap-4 px-6 py-4 md:border-r md:border-black",
                menuOpen && isMobile && "hidden",
              )}
            >
              {TABS.map((tab) => (
                <Tab key={tab.name} as={Fragment}>
                  {({ selected }) => (
                    <div
                      onClick={() => setMenuOpen(true)}
                      className={cn(
                        "flex items-center gap-2",
                        selected && "font-medium text-accent-400",
                      )}
                    >
                      {tab.icon}
                      {tab.name}
                    </div>
                  )}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels
              className={cn(
                "block px-6 py-4",
                isMobile && !menuOpen && "hidden",
              )}
            >
              <Tab.Panel>
                <ProfileSettings />
              </Tab.Panel>
              <Tab.Panel>Content 2</Tab.Panel>
              <Tab.Panel>Content 3</Tab.Panel>
              <Tab.Panel>Content 4</Tab.Panel>
              <Tab.Panel>Content 5</Tab.Panel>
            </Tab.Panels>
          </div>
        </Tab.Group>
      </div>
    </Container>
  );
};

export default ProfilePage;