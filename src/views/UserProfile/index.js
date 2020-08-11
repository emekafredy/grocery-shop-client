import React, { useContext } from 'react';
import { Card, CardContent, CardHeader } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';

// context
import { AuthContext } from '../../context/auth';

import './UserProfile.scss';
import { useEffect } from 'react';

export const UserProfile = () => {
  const { profile, getUser } = useContext(AuthContext);

  useEffect(() => {
    getUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="profile__container">
      <h2 className="profile__header"> User Profile </h2>
      <hr/>
      <Card className="profile__card">
        <CardContent>
          <img className="profile__image" src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png" alt=""/>

          <Card className="profile__account-details">
            <CardHeader title= { <p className="profile__account-details-title"> Account Details </p> } />
            <hr />
            <CardContent>
              <p className="profile__name"> { profile?.user.name } </p>
              <p className="profile__email"> { profile?.user.email } </p>
            </CardContent>
          </Card>

          <Card className="profile__shipping-addresses">
            <CardHeader title= {
              <div>
                <span className="profile__shipping-addresses__title"> Shipping Addresses </span>
                <span className="profile__shipping-addresses__add">
                  <AddIcon fontSize="large" className="profile__shipping-addresses__add-icon" />
                </span>
              </div>
            } />
            <hr />
            <CardContent>
              {
                profile?.user.addresses.map(address => {
                  return (
                    <div>
                      <span className="profile__shipping-addresses__list"> Address 1 </span>
                      <span className="profile__shipping-addresses__list-edit">
                        <EditIcon className="profile__shipping-addresses__add-icon"/>
                      </span> <br/>
                      <hr />
                      <p className="profile__shipping-addresses__list__address-name"> { address.name } </p>
                    </div>
                  )
                })
              }
            </CardContent>
          </Card>
        </CardContent>
      </Card>
    </div>
  )
}
