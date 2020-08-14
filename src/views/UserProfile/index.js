import React, { useContext, useEffect, useState } from 'react';
import { Card, CardContent, CardHeader } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';

// component
import { AddAddressForm } from '../../components/Forms/AddAddressForm';
import { AddPhoneForm } from '../../components/Forms/AddPhoneForm';
import { ProfileUpdateForm } from '../../components/Forms/ProfileUpdateForm';

// context
import { AuthContext } from '../../context/auth';

import './UserProfile.scss';


export const UserProfile = () => {
  const { profile, getUser, updateUserProfile, loading } = useContext(AuthContext);

  // modal states
  const [addressModalOpen, setAddressModalOpen] = useState(false);
  const [phoneModalOpen, setPhoneModalOpen] = useState(false);
  const [profileUpdateModalOpen, setProfileUpdateModalOpen] = useState(false);

  // form input states
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  
  const handleOpenAddressModal = () => setAddressModalOpen(true);
  const handleCloseAddressModal = () => setAddressModalOpen(false);

  const handleOpenPhoneModal = () => setPhoneModalOpen(true);
  const handleClosePhoneModal = () => setPhoneModalOpen(false);

  const handleOpenProfileUpdateModal = () => setProfileUpdateModalOpen(true);
  const handleCloseProfileUpdateModal = () => setProfileUpdateModalOpen(false);

  const handleProfileUpdate = async (e) => {
    e.preventDefault();

    await updateUserProfile({ name, phone, address });
    setProfileUpdateModalOpen(false);
  }

  const handleAddAddress = async (e) => {
    e.preventDefault();

    await updateUserProfile({ address });
    setAddressModalOpen(false);
  }

  const handleAddPhone = async (e) => {
    e.preventDefault();

    await updateUserProfile({ phone });
    setPhoneModalOpen(false);
  }

  useEffect(() => {
    getUser();
    setName(profile?.user.name || '');
    setPhone(profile?.user.phone || '');
    setAddress(profile?.user.address || '');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [profile?.user.address])

  return (
    <div className="profile__container">
      <h2 className="profile__header"> User Profile </h2>
      <hr/>
      <Card className="profile__card">
        <CardContent>
          <img className="profile__image" src={ profile?.user.image } alt=""/>

          <div className="profile__card__edit">
            <EditIcon fontSize="large" className="profile__card__edit-icon" onClick={handleOpenProfileUpdateModal} />
          </div>
          <ProfileUpdateForm
            profileUpdateModalOpen={profileUpdateModalOpen}
            handleCloseProfileUpdateModal={handleCloseProfileUpdateModal}
            handleSubmit={(e) => handleProfileUpdate(e)}
            phone={phone}
            handleChange={e => setPhone(e.target.value)}
            name={name}
            handleNameChange={e => setName(e.target.value)}
            address={address}
            handleAddressChange={e => setAddress(e.target.value)}
          />

          <Card className="profile__account-details">
            <CardHeader title= { <span className="profile__account-details-title"> Account Details </span> } />
            <hr />
            <CardContent>
              <p className="profile__name"> { profile?.user.name } </p>
              <p className="profile__email"> { profile?.user.email } </p>
            </CardContent>
          </Card>

          <Card className="profile__shipping-addresses">
            <CardHeader title= { <span className="profile__shipping-addresses__title"> Shipping Details </span> } />
            <hr />
            <CardContent>
              <span className="profile__shipping-addresses__list"> Address </span>
              <br/>
              { profile?.user.address ?
                <p className="profile__shipping-addresses__list__address-name"> { profile?.user.address } </p> :
                <AddAddressForm
                  handleOpenAddressModal={handleOpenAddressModal}
                  addressModalOpen={addressModalOpen}
                  handleCloseAddressModal={handleCloseAddressModal}
                  handleSubmit={e => handleAddAddress(e)}
                  address={address}
                  handleChange={e => setAddress(e.target.value)}
                  loading={loading}
                />
              }
            </CardContent>
            <CardContent>
              <span className="profile__shipping-addresses__list"> Phone </span>
              <br/>
              { profile?.user.phone ?
                <p className="profile__phone"> { profile?.user.phone } </p> :
                <AddPhoneForm
                  handleOpenPhoneModal={handleOpenPhoneModal}
                  phoneModalOpen={phoneModalOpen}
                  handleClosePhoneModal={handleClosePhoneModal}
                  handleSubmit={e => handleAddPhone(e)}
                  phone={phone}
                  handleChange={e => setPhone(e.target.value)}
                  loading={loading}
                />
              }
            </CardContent>
          </Card>
        </CardContent>
      </Card>
    </div>
  )
}
