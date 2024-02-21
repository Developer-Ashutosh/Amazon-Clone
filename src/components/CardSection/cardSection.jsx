import React from "react";
import { Card } from "../index";

const CardSection = () => {
  const list = [
    {
      title: "Smartwatch starts at ₹1,999",
      url: "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wearables/PC_CategoryCard_379X304_1._SY304_CB614835787_.jpg",
    },
    {
      title: "Starting ₹99 | Indoor plants",
      url: "https://images-eu.ssl-images-amazon.com/images/G/31/img18/Lawn_Garden/Ud/MSO_May/compressed_379x304_compressed._SY304_CB592193370_.jpg",
    },
    {
      title: "Up to 50% off | International brands",
      url: "https://images-eu.ssl-images-amazon.com/images/G/31/img19/OOC/Gateway/wk_7/desktop-CC379x304._SY304_CB582743043_.jpg",
    },
    {
      title: "The Louis Theroux Podcast",
      url: "https://images-fe.ssl-images-amazon.com/images/G/35/AmazonMusic/2024/WeeklyBuild/021624/021624_AUNZ_FeaturedPodcast_TheLouisTherouxPodcast_GW_CategoryCard_D_1X_379x304._SY304_CB582512229_.jpg",
    },
    {
      title: "Under ₹699 | Combo packs | Amazon brands & more",
      url: "https://images-eu.ssl-images-amazon.com/images/G/31/Symbol/2024/GW_Feb/12th/Combo_low_res_2_1_1_1._SY304_CB582679688_.jpg",
    },
    {
      title: "Deals in PCs",
      url: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_1x_v1._SY304_CB573698005_.jpg",
    },
    {
      title: "Toys",
      url: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_1x_v3._SY304_CB573698005_.jpg",
    },
    {
      title: "Player's paradise starts here",
      url: "https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2023/img/Consumer_Electronics/XCM_CUTTLE_1546843_2940864_379x304_1X_en_US._SY304_CB613273467_.jpg",
    },
    {
      title: "Upgrade your office furniture",
      url: "https://images-na.ssl-images-amazon.com/images/G/01/dex/2023/Roar/October/D_CC_Roar_OfficeDepot_1023_1X_Furnitrure_v2._SY304_CB577544739_.jpg",
    },
    {
      title: "Deals on shoes",
      url: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_1x_v8._SY304_CB573698005_.jpg",
    },
    {
      title: "Laptops for every need",
      url: "https://images-na.ssl-images-amazon.com/images/G/01/us-manual-merchandising/XCM_CUTTLE_1622894_3373440_379x304_1X_en_size1_US._SY304_CB597469214_.jpg",
    },
    {
      title: "Save resources, buy second-hand",
      url: "https://images-eu.ssl-images-amazon.com/images/G/02/warehouse-deals/Desktop_Sustainability_379x304._SY304_CB586624168_.jpg",
    },
    {
      title: "Bestsellers in Sport",
      url: "https://images-eu.ssl-images-amazon.com/images/G/02/EU-Customer-Growth-and-Advocacy/homepage-graphics/XCM_CUTTLE_1602272_3253832_379x304_1X_de_DE._SY304_CB600257559_.jpg",
    },
    {
      title: "Fragrance Storefront",
      url: "https://images-eu.ssl-images-amazon.com/images/G/02/UK-hq/2024/img/Beauty_Mass_/XCM_CUTTLE_1688692_3602271_379x304_1X_en_GB_FragranceStorefrontDesktop._SY304_CB583698888_.jpg",
    },
    {
      title: "Race to shop these products",
      url: "https://images-fe.ssl-images-amazon.com/images/G/35/35/250427_racingevent-homepage1._SY304_CB582053418_.jpg",
    },
    {
      title: "University stationery supplies",
      url: "https://images-fe.ssl-images-amazon.com/images/G/35/AU-hq/2024/img/Consumables/XCM_CUTTLE_1689500_3605095_379x304_1X_en_AU._SY304_CB583600969_.jpg",
    },
    {
      title: "38% off RRP on Fire TV Stick 4K ",
      url: "https://images-fe.ssl-images-amazon.com/images/G/35/kindle/merch/2023/event/Mantra_Background0.5x._SY304_CB582809589_.jpg",
    },
    {
      title: "Min. 50% off | Outdoor solar lights",
      url: "https://images-eu.ssl-images-amazon.com/images/G/31/img18/Lawn_Garden/Ud/2024/PCCC/Pc_379_X_304-2-min._SY304_CB582865379_.jpg",
    },
    {
      title: "Up to 70% off | Curated home decor",
      url: "https://m.media-amazon.com/images/I/61IXg9A9rpL._AC_SY200_.jpg",
    },
    {
      title: "Creating business solutions",
      url: "https://images-na.ssl-images-amazon.com/images/G/01/us-manual-merchandising/RBS-in-house-Graphics/cc_359_laptop_us_v1._SY304_CB576754001_.jpg",
    },
  ];

  return (
    <section className="flex items-start justify-start gap-x-6 flex-wrap max-[1105px]:gap-x-3">
      {list.map((item, index) => (
        <Card key={index} title={item.title} url={item.url} />
      ))}
    </section>
  );
};

export default CardSection;
