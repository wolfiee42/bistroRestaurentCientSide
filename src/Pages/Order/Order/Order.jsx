import { useState } from "react";
import coverImg from "../../../assets/shop/banner2.jpg"
import Cover from "../../../Shared/Cover"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from "../../../hooks/useMenu";
import Ordertab from "../Order Tab/Ordertab";



const Order = () => {
    const [tabIndex, settabIndex] = useState(0);
    const [menu] = useMenu();
    
    const salad = menu.filter(item => item.category === "salad");
    const soup = menu.filter(item => item.category === "soup");
    const pizza = menu.filter(item => item.category === "pizza");
    const dessert = menu.filter(item => item.category === "dessert");
    const drinks = menu.filter(item => item.category === "drinks");
    return (
        <div className="max-w-7xl mx-auto">
            <Cover img={coverImg} title='Order Now'></Cover>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => settabIndex(index)}>
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soups</Tab>
                    <Tab>Desserts</Tab>
                    <Tab>Drinks</Tab>
                </TabList>
                <TabPanel>
                    <Ordertab item={salad}></Ordertab>
                </TabPanel>
                <TabPanel>
                    <Ordertab item={pizza}></Ordertab>
                </TabPanel>
                <TabPanel>
                    <Ordertab item={soup}></Ordertab>
                </TabPanel>
                <TabPanel>
                    <Ordertab item={dessert}></Ordertab>
                </TabPanel>
                <TabPanel>
                    <Ordertab item={drinks}></Ordertab>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;