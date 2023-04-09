
import Joi from "joi";
import dotenv from "dotenv"
import Product from "../models/product"
import Category from "../models/category"
dotenv.config();
const { API_URI } = process.env;

const productShema = Joi.object({
    name: Joi.string().required(),
    price: Joi.number().required(),
    desc: Joi.string(),
    categoryId: Joi.string().required(),
})
export const getAll = async (req, res) => {
    const { _sort = "createAt", _order = "asc", _limit = 10, _page = 1 } = req.query;
    const options = {
        page: _page,
        limit: _limit,
        sort: {
            [_sort]: _order === "desc" ? -1 : 1,
        },
    };
    try {
        // const { data: products } = await axios.get(`${API_URI}/products`);

        // const products = await Product.find()
        const products = await Product.paginate({}, options);
        if (products.length === 0) {
            return res.json({
                message: "Không có sản phẩm nào",
            });
        }
        return res.json(products);
    } catch (error) {
        return res.status(400).json({
            message: error,
        });
    }
};
export const get = async function (req, res) {
    try {
        // const { data: product } = await axios.get(`${API_URI}/products/${req.params.id}`);
        const product = await (await Product.findById(req.params.id)).populated("categoryId");
        if (!product) {
            return res.json({
                message: "Không có sản phẩm nào",
            });
        }
        return res.json(product);
    } catch (error) {
        return res.status(400).json({
            message: error,
        });
    }
};
export const create = async function (req, res) {
    try {
        const { error } = productShema.validate(req.body);
        if (error) {
            return res.status(400).json({
                message: error.details[0].message,
            })
        }
        // const { data: product } = await axios.post(`${API_URI}/products`, req.body);
        const product = await Product.create(req.body);
        if (!product) {
            return res.json({
                message: "Không thêm sản phẩm",
            });
        }
        await Category.findByIdAndUpdate(product.categoryId, {
            $addToSet: {
                products: product._id,
            },
        });
        return res.json({
            message: "Thêm sản phẩm thành công",
            data: product,
        });
    } catch (error) {
        return res.status(400).json({
            message: error,
        });
    }
};
export const update = async function (req, res) {
    try {
        const { error } = productShema.validate(req.body);
        if (error) {
            return res.status(400).json({
                message: error.details[0].message,
            })
        }
        // const { data: product } = await axios.patch(`${API_URI}/products/${req.params.id}`, req.body);
        // const product = await Product.updateOne({ _id: req.params.id }, req.body)
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!product) {
            return res.json({
                message: "Cập nhật sản phẩm không thành công",
            });
        }
        return res.json({
            message: "Cập nhật sản phẩm thành công",
            data: product,
        });
    } catch (error) {
        return res.status(400).json({
            message: error,
        });
    }
};
export const remove = async function (req, res) {
    try {
        // await axios.delete(`${API_URI}/products/${req.params.id}`);
        // await Product.deleteOne({ _id: req.params.id })
        const product = await Product.findByIdAndDelete(req.params.id);
        return res.json({
            message: "Xóa sản phẩm thành công",
            product
        });
    } catch (error) {
        return res.status(400).json({
            message: error,
        });
    }
};

// computed property name

// const myName = "price";

// const myInfo = {
//     [myName]: "Dat",
// };

// console.log(myInfo.price);
