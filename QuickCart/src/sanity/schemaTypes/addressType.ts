export default {
  name: 'address',
  title: 'Address',
  type: 'document',
  fields: [
    { name: 'fullName', type: 'string', title: 'Full Name' },
    { name: 'phoneNumber', type: 'string', title: 'Phone Number' },
    { name: 'pincode', type: 'string', title: 'Pin Code' },
    { name: 'area', type: 'string', title: 'Area/Street' },
    { name: 'city', type: 'string', title: 'City' },
    { name: 'state', type: 'string', title: 'State' },
  ],
}