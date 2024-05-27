import db from "../Server.js";


export const GetAllBidsItems = async (req, res) => {
    const { items } = req.params;
    const { Name, Description, Starting_Price, Current_Price } = req.body;

    try {
        const { recordset } = await db.request()
            .input('items', items)
            .input('Flag', 'GetAllBidsItems')
            .execute(SP);


        //console.log(recordset)
        let filterDate = recordset.map((item) => {
            return {
                ID: item.id,
                Name: item.name,
                Description: item.description,
                Starting_Price: item.starting_price,
                Current_Price: item.current_price,
                Img_Url: item.image_url,
                EndTime: item.end_time
            }
        })
        res.status(200).json({ Flag: recordset[0].Flag, Flag_Msg: recordset[0].Flag_Msg, Result: filterDate });
    } catch (error) {
        console.log('error:', error);
        return res.status(500).json({ Flag: 0, Flag_Msg: 'Internal server error' });
    }
};



export const CreateBidsItems = async (req, res) => {
    const { items } = req.params;
    try {
        const { recordset } = await db.request()
            .input('items', items)
            .input('Name', Name)
            .input('Description', Description)
            .input('Starting_Price', Starting_Price)
            .input('Current_Price', Current_Price)
            .input('Flag', 'CreateBidsItems')
            .execute(SP);


        //console.log(recordset)
       
        return res.status(200).json({ Flag: recordset[0].Flag, Flag_Msg: recordset[0].Flag_Msg, Result: filterDate });
    } catch (error) {
        console.log('error:', error);
        return res.status(500).json({ Flag: 0, Flag_Msg: 'Internal server error' });
    }
};