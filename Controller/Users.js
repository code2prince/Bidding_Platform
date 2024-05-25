import db from '../Server'

const SP = '';

export const UserRegister = async (req, res) => {
    let { Name, Email, Password, Role } = req.body;

    console.log(req.body)
    try {
        const { recordset } = await db.request()
            .input('Flag', 'SignUp')
            .input('Name', Name)
            .input('Email', Email)
            .input('Password', Password)
            .input('Role', Role)

            .execute(SP)

        console.log(recordset);
        return res.status(200).json({ Flag: recordset[0].Flag, Flag_Msg: recordset[0].Flag_Msg })
    } catch (error) {
        console.log('error:', error)
        return res.status(200).json({ Flag: '0', Flag_Msg: 'Something Went Wrong' })
    }
}