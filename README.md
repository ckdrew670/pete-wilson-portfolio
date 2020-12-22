This site uses the [Gatsby Starter Level 2 theme](https://www.gatsbyjs.com/starters/Knochenmark/gatsby-starter-level-2) as a starting point for a simple portfolio site for a musician and media composer.

# Table of Contents

- [Gatsby CLI](#gatsby-cli)
- [Create a Local Version](#create-a-local-version)
- [Content Creation](#content-creation)
  - [Creating Albums](#creating-albums)
    - [Frontmatter for Albums](#frontmatter-for-albums)

# Gatsby CLI

Install the Gatsby CLI `npm install -g gatsby-cli`. You'll need Node v10+ (`nvm use v10`). You can set up an `.nvmrc` file in your project to manage your version of Node.

There is a comprehensive cheatsheet for Gatsby CLI commands [here](https://www.gatsbyjs.com/docs/cheat-sheet/) or run `gatsby --help`.

# Create a local version

## Create a project folder

    Use the Gatsby CLI to create a new project:

    ```shell
    # create a new Gatsby site using the level-2 starter
    gatsby new my-project https://github.com/ckdrew670/pete-wilson-portfolio.git
    ```

    Navigate into your new site’s directory, install dependencies and start up a development server.

    ```shell
    cd my-project/
    npm install
    gatsby develop
    ```

    Your site is now running at `http://localhost:8000`.

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

# Content Creation

All content files and the information for the sections on the index page can be found in the `content` folder.

The folder contains subfolders for:

- albums
- soundcloud
- cards
- posts (to be added)
- sections
    - about
    - contact
    - hero

## Creating Albums

In order to create an album you just have to add a markdown file under `content/albums` and move images that are used in your blog post into `content/albums/images`.

### Frontmatter for albums

The frontmatter information for each blog post is structured as following:

| Field           | Type     | Description             | Example               |
| -------------   | -------- | ----------------------- | --------------------- |
| date            | Date     | Published  Date         | 2020-05-31            |
| title           | String   | Album Title             | 'Some title'          |
| tags            | String[] | List of Tags            | ['foo', 'bar']        |
| published       | Boolean  | Is Published Flag       | true                  |
| cover_image     | String   | Path of the Cover Image | ./images/my-image.jpg |
| url             | String   | Link to album           | 'https://blah.com'    |
| description     | String   | Description of album    | 'Some description'    |
| publisher       | String   | Name of publisher       | 'Sony'                |
| catalogue_number| String   | Publisher reference     | 'TF34506'             |

---