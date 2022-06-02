import Article from '../models/article.js'

export const getAllArticles = async (_req, res) => {
    const article = await Article.find() 
    console.log(article)
    console.log('GET Articles ->', article)
    return res.status(200).json(article)
}
export const getSingleArticle = async (req, res) => {
  try {
    const { id } = req.params
    const article = await Article.findById(id)
    console.log(article)

    return res.status(200).json(article)
  } catch (err) {
    console.log('Error finding single article')
    console.log(err)
    return res.status(404).json({ message: 'article not found', errors: err })
  }
}
export const createArticle = async (req, res) => {
    try {
      const adminArticle = { ...req.body, owner: req.currentUser._id }
      if (req.currentUser.username !== 'admin') throw new Error('Unauthorised')
      const articleToAdd = await Article.create(adminArticle)
      res.status(201).json(articleToAdd)
    } catch (err) {
      console.log('Failed to add Article')
      console.log(err)
      return res.status(422).json(err)
    }
  }

  export const updateArticle = async (req, res) => {
    const { id } = req.params
    try {
      const views = await Article.findOneAndUpdate({ _id: id }, { ...req.body } )
      return res.status(200).json(views)
    } catch (err) {
      console.log(err)
      return res.status(404).json(err.message)
    }
  }

  export const deleteArticle = async (req, res) => {
    const { id } = req.params
    try {
      const articleToDelete = await Article.findById(id)
  
      if (!articleToDelete) throw new Error('Article not found')
      if (!articleToDelete.owner.equals(req.currentUser._id)) throw new Error('Unauthorised')
      
      await articleToDelete.remove()
      console.log('Article successfully deleted!')
      return res.sendStatus(204)
    } catch (err) {
      console.log('Article not deleted')
      console.log(err)
      return res.status(404).json({ message: 'Article not found or deleted', errors: err.message })
    }
  }