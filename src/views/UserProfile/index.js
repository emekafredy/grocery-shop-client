import React, { useContext, useEffect, useState } from 'react';
import { Card, CardContent, CardHeader } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';

// component
import { ModalComponent } from '../../components/Modal';
import { AddressForm } from '../../components/AddressForm';

// context
import { AuthContext } from '../../context/auth';

import './UserProfile.scss';


export const UserProfile = () => {
  const { profile, getUser, addUserAddress, loading } = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  const [address, setAddress] = useState("");

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAddAddress = async (e) => {
    e.preventDefault();

    await addUserAddress({ name: address });
    setOpen(false);
    setAddress('')
  }

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
          <img className="profile__image" src={ profile?.user.image } alt=""/>

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
                  <AddIcon
                    fontSize="large"
                    className="profile__shipping-addresses__add-icon"
                    onClick={handleOpen}
                  />
                </span>
                <ModalComponent
                  open={open}
                  handleClose={handleClose}
                  title="Add Address"
                >
                  <AddressForm
                    onSubmit={(e) => handleAddAddress(e)}
                    value={address}
                    onChange={e => setAddress(e.target.value)}
                    loading={loading}
                  />
                </ModalComponent>
              </div>
            } />
            <hr />
            <CardContent>
              {
                profile?.user.addresses.map(address => {
                  return (
                    <Card key={address.id} className="profile__shipping-addresses__list-card">
                      <span className="profile__shipping-addresses__list">
                        Address { profile?.user.addresses.indexOf(address) + 1 }
                      </span>
                      <span className="profile__shipping-addresses__list-edit">
                        <EditIcon className="profile__shipping-addresses__add-icon"/>
                      </span> <br/>
                      <p className="profile__shipping-addresses__list__address-name"> { address.name } </p>
                    </Card>
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
