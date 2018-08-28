
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('loans').del()
    .then(function () {
      // Inserts seed entries
      return knex('loans').insert([
        { lenderName: 'Basket Weaver Co',
          recipientsName: null,
          loanNumber: 'A321',
          totalAmount: 10000,
          startDate: '8/12/2017',
          payoffDate: '8/31/2019',
          isUserLoan: false,
          userId: 1
        },
        { lenderName: 'Great Bats Inc',
          recipientsName: null,
          loanNumber: 'A333B',
          totalAmount: 5000,
          startDate: '8/12/2017',
          payoffDate: '8/31/2019',
          isUserLoan: false,
          userId: 1
        },
        { lenderName: null,
          recipientsName: 'SmallHut Inc.',
          loanNumber: 'A321',
          totalAmount: 1000,
          startDate: '8/12/2017',
          payoffDate: '8/31/2019',
          isUserLoan: true,
          userId: 1
        },
        { lenderName: 'Money Shark Co',
          recipientsName: null,
          loanNumber: 'A333B',
          totalAmount: 5000,
          startDate: '8/12/2017',
          payoffDate: '8/31/2019',
          isUserLoan: false,
          userId: 2
        },
      ]);
    });
};
