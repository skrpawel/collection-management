import axios from "axios";
import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
import { CgLockUnlock, CgLock } from 'react-icons/cg';
import { AiOutlineUserDelete } from 'react-icons/ai';
import Button from "./Button";
import Select from 'react-select'


const AdminPanel = () => {

    const [users, setUsers] = useState([]);
    // const [isAcitve, setIsActive] = useState(true
    const URL = 'https://itransistion-project-be.herokuapp.com/api/user'

    const selectOptions = [
        { label: 'admin', value: 'admin' },
        { label: 'standard', value: 'standard' }
    ]
    const selectChange = () => { }

    const deleteUser = async (id) => {
        try {
            await axios.delete(`${URL}/delete/${id}`, {
                params: {
                    id
                }
            });
        } catch (err) {
            return err;
        }
    };

    const changeUserStatus = async (action, id, status) => {
        if (status === action) return null;

        try {
            await axios.post(`${URL}/${action}/${id}`, { id });
        } catch (err) {
            return err;
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(URL);
                setUsers(res.data);
            } catch (err) {
                console.log(err);
            }
        }
        fetchData();
    }, [])

    return (
        <div className="flex flex-col w-full">


            <div className="w-full">
                <table className="w-full text-xs md:text-sm  text-gray-500 dark:text-gray-400 text-center">
                    <thead className="text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr className="">
                            <th scope="col">ID</th>
                            <th scope="col">name</th>
                            <th scope="col">e-mail</th>
                            <th scope="col">type</th>
                            <th scope="col">status</th>
                            <th scope="col">block</th>
                            <th scope="col">unblock</th>
                            <th scope="col">delete</th>

                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => {
                            return (
                                <tr key={user.id} className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
                                    {/* <th scope="row">
                                        <input
                                            type='checkbox'
                                            name={user.email}
                                            id={user.id}
                                            checked={isCheck.includes(user.id)}
                                            onChange={handleChange}
                                        />
                                    </th> */}
                                    <th>{user.id}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        <Select
                                            options={selectOptions}
                                            onChange={selectChange}
                                            defaultValue={{ label: user.type, value: user.type }} />
                                    </td>
                                    <td>{user.status}</td>
                                    <td>
                                        <Button onClick={() => changeUserStatus('block', user.id, user.status)} color='228022'>{<CgLock />}</Button>
                                    </td>
                                    <td>
                                        <Button onClick={() => changeUserStatus('unblock', user.id, user.status)} color='228022'>{<CgLockUnlock />}</Button>
                                    </td>
                                    <td>
                                        <Button onClick={() => deleteUser(user.id)} color='993212'>{<AiOutlineUserDelete />}</Button>
                                    </td>
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