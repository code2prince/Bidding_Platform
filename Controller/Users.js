import db from '../Server.js'

const SP = 'SP_Bidding';

export const UserRegister = async (req, res) => {
    let { Name,City,Gender,UserName, Email, Password, Role } = req.body;

    // console.log(req.body)
    try {
        const { recordset } = await db.request()
            .input('Flag', 'UserRegister')
            .input('Name',Name)
            .input('City',City)
            .input('Gender',Gender)
            .input('UserName', UserName)
            .input('Email', Email)
            .input('Password', Password)
            .input('Role', Role)
            .execute(SP)

        // console.log(recordset);
        return res.status(200).json({ Flag: recordset[0].Flag, Flag_Msg: recordset[0].Flag_Msg })
    } catch (error) {
        console.log('error:', error)
        return res.status(200).json({ Flag: '0', Flag_Msg: 'Something Went Wrong' })
    }
}

export const UserLogin=async(req,res)=>{
    let { UserName, Password } = req.body;
    try {
        const { recordset } = await db.request()
            .input('Flag', 'Login')
            .input('UserName', UserName)
            .input('Password', Password)
            .execute(SP)

        //console.log(recordset);
        return res.status(200).json({ Flag: recordset[0].Flag, Flag_Msg: recordset[0].Flag_Msg,UserName:recordset[0].UserName,Role:recordset[0].Role })

    } catch (error) {
        console.log('error:', error)
        return res.status(200).json({ Flag: '0', Flag_Msg: 'Something Went Wrong' })
    }
}

export const GetUserProfile=async(req,res)=>{
    let { UserName } = req.body;
    try {
        const { recordset } = await db.request()
            .input('Flag', 'GetUserProfile')
            .input('UserName', UserName)
            .execute(SP)
            let filerDate=recordset.map((item)=>{
                return{
                    Name:item.Name,
                    UserName:item.UserName,
                    Email:item.Email,
                    City:item.City,
                    Gender:item.Gender,
                    Role:item.Role
                }
            })
         res.status(200).json({ Flag: recordset[0].Flag, Flag_Msg: recordset[0].Flag_Msg,Result:filerDate})

    } catch (error) {
        console.log('error:', error)
        return res.status(200).json({ Flag: '0', Flag_Msg: 'Something Went Wrong' })
    }
}