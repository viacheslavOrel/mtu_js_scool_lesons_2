const userModel = require('../models/user');

exports.getUsers = async function (req, res) {
    if (req.session.user.userRole !== 'admin') res.redirect('/');

    const usersQuantity = await userModel.find().estimatedDocumentCount();
    const pageQuantity = Math.ceil(usersQuantity / 3);

    const currentPageNumber = req.params.page;
    if (currentPageNumber) {
        let currentPage = 0;

        if (+currentPageNumber < 0) currentPage = 0;
        else if (+currentPageNumber > pageQuantity) currentPage = pageQuantity;
        else currentPage = +currentPageNumber;

        const users = await userModel.find().skip(currentPage * 3).limit(3).lean();

        res.render('admin', {
            title: 'Remove the cube. Admin',
            isAdmin: true,
            prevPage: {
                disable: currentPage === 0,
                link: `/admin/${currentPage - 1}`
            },
            nextPage: {
                disable: currentPage === pageQuantity,
                link: `/admin/${currentPage + 1}`
            },
            pages: getPages(pageQuantity, currentPage),
            users
        });
    } else {
        res.render('/admin/0');
    }
}

function getPages (pageQuantity, currentPage) {
    const pages = [];
    for (let i = 0; i <= pageQuantity; i++) {
        pages.push({
            active: currentPage === i,
            number: i
        });
    }

    return pages;
}