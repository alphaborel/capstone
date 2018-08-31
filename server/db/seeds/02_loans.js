
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('loans').del()
    .then(function () {
      // Inserts seed entries
      return knex('loans').insert([
        { lenderName: 'Credible',
          recipientsName: null,
          loanNumber: 'A321',
          totalAmount: 10000,
          startDate: '8/12/2017',
          payoffDate: '8/27/2019',
          isUserLoan: false,
          userId: 1
        },
        { lenderName: 'Lendingtree',
          recipientsName: null,
          loanNumber: 'A333B',
          totalAmount: 8000,
          startDate: '8/12/2017',
          payoffDate: '8/31/2019',
          isUserLoan: false,
          userId: 1
        },
        { lenderName: null,
          recipientsName: 'Tesla',
          loanNumber: 'A321',
          totalAmount: 2500,
          startDate: '6/12/2017',
          payoffDate: '3/31/2019',
          isUserLoan: true,
          userId: 1
        },
        { lenderName: 'Marcus',
          recipientsName: null,
          loanNumber: 'A333B',
          totalAmount: 22000,
          startDate: '8/12/2018',
          payoffDate: '8/31/2019',
          isUserLoan: false,
          userId: 2
        },
        { lenderName: null,
          recipientsName: 'Your Space LLC',
          loanNumber: 'A321',
          totalAmount: 5000,
          startDate: '6/12/2018',
          payoffDate: '3/14/2019',
          isUserLoan: true,
          userId: 1
        },
      ]);
    });
};
