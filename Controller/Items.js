import db from "../Server.js";
import upload from "../Multer/multerConfiq.js";
const SP = 'SP_Bidding';

export const CreateItems = async (req, res) => {
    let { Name, Description, Starting_Price, Current_Price, EndTime } = req.body;
    let Img_Url=''
    if (req.file) {
        Img_Url = req.file.path; 
    }else{
        Img_Url="Image not Uploaded"
    }
    console.log("Req:",req.body)
    try {
        const { recordset } = await db.request()
            .input('Flag', 'CreateItems')
            .input('Name', Name)
            .input('Description', Description)
            .input('Starting_Price', Starting_Price)
            .input('Current_Price', Current_Price)
            .input('Img_Url', Img_Url)
            .input('EndTime', EndTime)
            .execute(SP)
        console.log(recordset)

        return res.status(200).json({ Flag: recordset[0].Flag, Flag_Msg: recordset[0].Flag_Msg })

    } catch (error) {
        console.log('error:', error)
        return res.status(200).json({ Flag: '0', Flag_Msg: 'Something Went Wrong' })
    }
}



export const GetAllItems = async (req, res) => {
    try {
        const { recordset } = await db.request()
            .input('Flag', 'GetAllItems')
            .execute(SP)
        console.log(recordset)
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
        res.status(200).json({ Flag: recordset[0].Flag, Flag_Msg: recordset[0].Flag_Msg, Result: filterDate })

    } catch (error) {
        console.log('error:', error)
        return res.status(200).json({ Flag: '0', Flag_Msg: 'Something Went Wrong' })
    }
}

export const GetItemById = async (req, res) => {
    const { id } = req.params;
    try {
        const { recordset } = await db.request()
            .input('ID', id)
            .input('Flag', 'GetItemById')
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


export const updateItemById = async (req, res) => {
    const { id } = req.params;
    const { Name, Description, Starting_Price, Current_Price } = req.body;

    try {
        const { recordset } = await db.request()
            .input('ID', id)
            .input('Name', Name)
            .input('Description', Description)
            .input('Starting_Price', Starting_Price)
            .input('Current_Price', Current_Price)

            .input('Flag', 'updateItemById')
            .execute(SP);

        //console.log(recordset)

        return res.status(200).json({ Flag: recordset[0].Flag, Flag_Msg: recordset[0].Flag_Msg });
    } catch (error) {
        console.log('error:', error);
        return res.status(500).json({ Flag: 0, Flag_Msg: 'Internal server error' });
    }
};



export const DeleteItemById = async (req, res) => {
    const { id } = req.params;

    try {
        const { recordset } = await db.request()
            .input('ID', id)
            .input('Flag', 'DeleteItemById')
            .execute(SP);
        return res.status(200).json({ Flag: recordset[0].Flag, Flag_Msg: recordset[0].Flag_Msg });
    } catch (error) {
        console.log('error:', error);
        return res.status(500).json({ Flag: 0, Flag_Msg: 'Internal server error' });
    }
};

