import { defineField, defineType } from 'sanity';

export const orders = defineType({
  name: 'orders',
  type: 'document',
  title: 'Orders',
  fields: [
    defineField({
      name: 'orderId',
      type: 'string',
      title: "Order's ID",
    }),
    defineField({
      name: 'customerId',
      type: 'reference',
      to: [{ type: 'customers' }],
      title: "Customer's ID",
    }),
    defineField({
      name: 'serviceId',
      type: 'number',
      title: 'Service ID',
    }),
    defineField({
      name: 'orderStatus',
      type: 'string',
      title: 'Order Status',
      options: {
        list: ['Pending', 'Shipped', 'Good', 'Normal', 'Bad'],
      },
    }),
    defineField({
      name: 'orderDate',
      type: 'date',
      title: 'Order Date',
    }),
    defineField({
      name: 'rentalDuration',
      type: 'string',
      title: 'Rental Duration',
    }),
    defineField({
      name: 'routeCondition',
      type: 'string',
      title: 'Route Condition',
      options: {
        list: ['Good', 'Normal', 'Bad'],
      },
    }),
  ],
});

export const customers = defineType({
    name: 'customers',
    type: 'document',
    title: 'Customers',
    fields: [
      defineField({
        name: 'id',
        type: 'number',
        title: 'Customer ID',
      }),
      defineField({
        name: 'email',
        type: 'string',
        title: 'Email Address',
      }),
      defineField({
        name: 'phone',
        type: 'string',
        title: 'Phone Number',
      }),
    ],
  });

  
  export const rentalInfo = defineType({
    name: 'rentalInfo',
    type: 'document',
    title: 'Rental Info',
    fields: [
      defineField({
        name: 'rentalDuration',
        type: 'string',
        title: 'Rental Duration',
      }),
      defineField({
        name: 'rentalDetails',
        type: 'string',
        title: 'Rental Details',
      }),
      defineField({
        name: 'address',
        type: 'string',
        title: 'Address',
      }),
      defineField({
        name: 'date',
        type: 'date',
        title: 'Date',
      }),
    ],
  });
// Schema for Decoration Service
export const decorationSchema = {
    name: 'Decoration',
    type: 'document',
    fields: [
      { name: 'id', type: 'number', title: 'ID' },
      { name: 'name', type: 'string', title: 'Name' },
      { name: 'details', type: 'string', title: 'Details' },
      { name: 'price', type: 'number', title: 'Price' },
    ],
  };
  
  // Schema for Reserving Destination
  export const reservingDestinationSchema = {
    name: 'Reserving',
    type: 'document',
    fields: [
      { name: 'id', type: 'string', title: 'ID' },
      { name: 'name', type: 'string', title: 'Name' },
      { name: 'location', type: 'string', title: 'Location' },
      { name: 'availability', type: 'boolean', title: 'Availability' },
      { name: 'details', type: 'string', title: 'Details' },
    ],
  };
  
  // Schema for Consultancy Manager
  export const consultancyManagerSchema = {
    name: 'ConsultancyManagers',
    type: 'document',
    fields: [
      { name: 'id', type: 'number', title: 'ID' },
      { name: 'name', type: 'string', title: 'Name' },
      { name: 'availability', type: 'boolean', title: 'Availability' },
      { name: 'specialization', type: 'string', title: 'Specialization' },
    ],
  };
    