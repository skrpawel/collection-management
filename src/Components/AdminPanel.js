import axios from "axios";
import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
import { CgLockUnlock } from 'react-icons/cg';
import { AiOutlineUserDelete } from 'react-icons/ai';
import Button from "./Button";

//TODO
// Redirect to '/' after current logged user is deleted or blocked 

const AdminPanel = () => {

    const [users, setUsers] = useState([]);
    const [isCheckAll, setIsCheckAll] = useState(false);
    const [isCheck, setIsCheck] = useState([]);
    // const [isAcitve, setIsActive] = useState(true)



    const handleSelectAll = e => {
        setIsCheckAll(!isCheckAll);
        setIsCheck(users.map(li => li.id));
        if (isCheckAll) {
            setIsCheck([]);
        }

        console.log(isCheck)
    };

    const handleChange = e => {
        const { id, checked } = e.target;

        setIsCheck([...isCheck, parseInt(id)]);

        if (!checked) {
            return setIsCheck(isCheck.filter(item => item !== parseInt(id)));
        }
    };

    console.log(isCheck)


    // const deleteUser = () => {
    //     axios.post(`${url}/deleteUser`, {
    //         checkedUsers: isCheck,
    //     }).then((response) => {
    //         alert("User deleted");
    //         logoutUser();
    //     });
    // };

    // const blockUser = () => {
    //     axios.post(`${url}/blockUser`, {
    //         checkedUsers: isCheck,
    //     }).then((response) => {
    //         alert("User blocked");
    //         logoutUser();
    //     });
    // };

    // const unblockUser = () => {
    //     axios.post(`${url}/unblockUser`, {
    //         checkedUsers: isCheck,
    //     }).then((response) => {
    //         alert("User active");
    //     });
    // };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get('http://localhost:5001/api/user');
                setUsers(res.data);
            } catch (err) {
                console.log(err);
            }
        }
        fetchData();
    }, [])

    return (
        <div className="flex flex-col w-full">
            <div className="flex" role="group" aria-label="Send">
                <Button color='782012' />
                <Button color='228022'>{<CgLockUnlock />}</Button>
                <Button color='993212'>{<AiOutlineUserDelete />}</Button>
            </div>


            <div className="w-full">
                <table className="w-full text-xs md:text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr className="">
                            <th scope="col">
                                <input
                                    type='checkbox'
                                    name='select_all'
                                    onChange={handleSelectAll}
                                    checked={isCheckAll}
                                /></th>
                            <th scope="col">ID</th>
                            <th scope="col">name</th>
                            <th scope="col">e-mail</th>
                            <th scope="col">type</th>

                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => {
                            return (
                                <tr key={user.id} className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
                                    <th scope="row">
                                        <input
                                            type='checkbox'
                                            name={user.email}
                                            id={user.id}
                                            checked={isCheck.includes(user.id)}
                                            onChange={handleChange}
                                        />
                                    </th>
                                    <th>{user.id}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.type}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>

    );
}

export default AdminPanel;