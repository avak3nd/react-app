import Card from "../components/ui/Card";

function Sales() {
    document.title = "React Games | Sales & Deals";

    const games = [
        {
            title: 'LEGO® Batman™: Legacy of the Dark Knight',
            img: "https://cdn1.epicgames.com/spt-assets/fa70ea4db42249d1b3c6e4775d0f65a6/dinner-1hsix.jpg",
            type: 'Base game',
            price: '€69.99',
            sale: 65,
            salePrice: '€24.49',
        },
        {
            title: 'Outbound',
            img: "https://cdn1.epicgames.com/spt-assets/c6cb1263d52c4212a11359ef4c8c29f0/outbound-1solh.png",
            type: 'Base game',
            price: '€59.99',
        },
        {
            title: '007 First Light',
            img: "https://cdn1.epicgames.com/spt-assets/ec961a13750b4d1da6881b1ca0eaecab/007-first-light-1ccui.jpg",
            type: 'Base game',
            price: '€49.99',
            sale: 30,
            salePrice: '€34.99',
        },
        {
            title: 'Bus Bound',
            img: "https://cdn1.epicgames.com/offer/edc2ce9e55fc4b4a9f2b922969ffdda5/EGS_BusBoundModdingKit_stillalivestudio_S2_1200x1600-db43f90320bd43ad98f8bdd11619d0e4",
            type: 'Base game',
            price: '€39.99',
        },
        {
            title: 'The Caribou Trail',
            img: "https://cdn1.epicgames.com/spt-assets/53d6b82e5c5e4ce198acd001f3e71eab/the-caribou-trail-1cl7g.png",
            type: 'Base game',
            price: '€54.99',
            sale: 50,
            salePrice: '€27.49',
        },
        {
            title: 'Bubsy 4D',
            img: "https://cdn1.epicgames.com/spt-assets/1ca3f2d09373400fa9a0583a184ec648/bubsy-4d-fp77s.png",
            type: 'Base game',
            price: '€69.99',
            sale: 65,
            salePrice: '€24.49',
        },
        {
            title: 'Rogue Fist',
            img: "https://cdn1.epicgames.com/spt-assets/9a689fef7c834b209e589adea22f6965/rogue-fist-xhnpe.png",
            type: 'Base game',
            price: '€59.99',
        },
        {
            title: 'Subnautica 2',
            img: "https://cdn1.epicgames.com/spt-assets/011270e3237f4bf69a3459942f005393/subnautica-2-1eodi.png",
            type: 'Base game',
            price: '€49.99',
            sale: 30,
            salePrice: '€34.99',
        },
        {
            title: 'Mixtape',
            img: "https://cdn1.epicgames.com/spt-assets/0db67d9d05ad429cb85ff1a445d073bd/mixtape-5rk0f.jpg",
            type: 'Base game',
            price: '€39.99',
        },
        {
            title: 'NITRO GEN OMEGA',
            img: "https://cdn1.epicgames.com/spt-assets/16feb65a46254a3788083a202a9e8334/nitro-gen-omega-1yfkq.jpg",
            type: 'Base game',
            price: '€54.99',
            sale: 50,
            salePrice: '€27.49',
        },
    ];

    return (
        <div className="max-w-300 mx-auto text-white py-8">
            <b className="text-[35px] max-[768px]:text-[30px] max-[500px]:text-[25px] max-[400px]:text-[20px]">Sales & Deals</b>

            <div className="grid grid-cols-5 max-[1024px]:grid-cols-4 max-[768px]:grid-cols-3 max-[600px]:grid-cols-2 pt-14 max-[768px]:pt-10 max-[500px]:pt-7.5 gap-x-6 gap-y-14 max-[500px]:gap-y-10">
                {games.map((game, index) => (
                    <div key={index}>
                        <Card game={game} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Sales