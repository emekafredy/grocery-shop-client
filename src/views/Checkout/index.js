import React, { useEffect, useContext, useState } from 'react';
import { Card, CardContent, CardHeader } from '@material-ui/core';

// component
import { DeliveryMethod } from '../../components/DeliveryMethod';
import { ProfileUpdateForm } from '../../components/Forms/ProfileUpdateForm';

import './Checkout.scss';

// context
import { AuthContext } from '../../context/auth';

export const Checkout = () => {
  const { profile, getUser, updateUserProfile, loading } = useContext(AuthContext);

  // tab state
  const [deliveryTabActive, setDeliveryTabActive] = useState(true);
  // modal state
  const [profileUpdateModalOpen, setProfileUpdateModalOpen] = useState(false);
  // form input states
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const handleOpenProfileUpdateModal = () => setProfileUpdateModalOpen(true);
  const handleCloseProfileUpdateModal = () => setProfileUpdateModalOpen(false);

  const handleProfileUpdate = async (e) => {
    e.preventDefault();

    await updateUserProfile({ name, phone, address });
    setProfileUpdateModalOpen(false);
  }

  const handleTabChange = (e) => {
    if (e.target.innerHTML === 'Home Delivery') {
      setDeliveryTabActive(true);
    } else {
      setDeliveryTabActive(false);
    }
  }

  useEffect(() => {
    getUser();
    setName(profile?.user.name || '');
    setPhone(profile?.user.phone || '');
    setAddress(profile?.user.address || '');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [profile?.user.address])

  return (
    <div className="checkout__container">
      <Card className="checkout__card">
        <CardHeader title= { <h2 className="checkout__header"> Checkout </h2> } />
        <hr />
        <CardContent>
          <DeliveryMethod
            userAddress={ profile?.user.address }
            userPhone={ profile?.user.phone }
            userName={profile?.user.name}
            handleOpenProfileUpdateModal={handleOpenProfileUpdateModal}
            loading={loading}
            deliveryTabActive={deliveryTabActive}
            handleTabChange={handleTabChange}
          />
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
        </CardContent>
      </Card>
    </div>
  )
}
