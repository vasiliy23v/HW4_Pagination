import React, { useState } from "react";
import User from "./user";
import Pagination from "./pagination";
import { paginate } from "../utils/paginate";
const Users = ({ users, ...rest }) => {
  const elementKey = users._id;
  const [currentPage, setCurrentPage] = useState(1);
  const count = users.length;

  const pageSize = 4;
  const onPageChange = (pageIndex) => {
    setCurrentPage(pageIndex);
  };
  const userCrop = paginate(users, currentPage, pageSize);
  return (
    <>
      {users.length > 0 && (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Имя</th>
              <th scope="col">Качества</th>
              <th scope="col">Провфессия</th>
              <th scope="col">Встретился, раз</th>
              <th scope="col">Оценка</th>
              <th scope="col">Избранное</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {userCrop.map((user) => (
              <User {...rest} {...user} />
            ))}
          </tbody>
        </table>
      )}

      <Pagination
        key={elementKey}
        itemsCount={count}
        pageSize={pageSize}
        onPageChange={onPageChange}
        currentPage={currentPage}
      />
    </>
  );
};

export default Users;
