<?php
include_once('templates/header.php');

if (isset($_GET['id'])) {
    $postId = intval($_GET['id']);
    $currentPost;

    foreach ($posts as $post) {
        if ($post['id'] === $postId) {
            $currentPost = $post;
        }
    }
}
?>
<main id="post-container">
    <div class="content-container">
        <h1 id="main-title"><?= $currentPost['title'] ?></h1>
        <p id="post-description"><?= $currentPost['description'] ?></p>
        <div class="img-container">
            <img src="<?= $BASE_URL ?>/img/<?= $currentPost['img'] ?>" alt="<?= $currentPost['title'] ?>">
        </div>
        <p class="post-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quibusdam consequatur dolores perferendis saepe aliquid doloribus, autem, ducimus iste eum repellendus labore tempora harum adipisci numquam aut ex, dolore voluptatibus?
            Quia provident expedita earum nulla voluptate adipisci natus architecto ipsam modi alias! Delectus necessitatibus consequatur recusandae dolorum ratione minus rerum rem soluta sed cumque consequuntur, in aliquid illo ut aperiam.
            Dolor fugit nemo odio tenetur incidunt eligendi nostrum vitae labore ipsa perspiciatis non nisi sit maxime corrupti dicta, similique ipsam. Illum at sequi laudantium alias necessitatibus repellat, incidunt quidem ducimus.
            Magnam praesentium ipsum blanditiis, quis laborum deleniti suscipit aut atque porro impedit beatae ducimus. Perferendis, quibusdam. Incidunt veritatis ut, harum natus facilis, maxime nam impedit sed, cupiditate saepe debitis vel!
            Delectus illum vero molestias voluptate sed ducimus doloremque accusantium fugiat ipsa quae ea unde, laboriosam culpa harum odit voluptates voluptatem alias fuga debitis dolorum corporis maiores ullam architecto repellendus! Molestias!</p>
        <p class="post-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quibusdam consequatur dolores perferendis saepe aliquid doloribus, autem, ducimus iste eum repellendus labore tempora harum adipisci numquam aut ex, dolore voluptatibus?
            Quia provident expedita earum nulla voluptate adipisci natus architecto ipsam modi alias! Delectus necessitatibus consequatur recusandae dolorum ratione minus rerum rem soluta sed cumque consequuntur, in aliquid illo ut aperiam.
            Dolor fugit nemo odio tenetur incidunt eligendi nostrum vitae labore ipsa perspiciatis non nisi sit maxime corrupti dicta, similique ipsam. Illum at sequi laudantium alias necessitatibus repellat, incidunt quidem ducimus.
            Magnam praesentium ipsum blanditiis, quis laborum deleniti suscipit aut atque porro impedit beatae ducimus. Perferendis, quibusdam. Incidunt veritatis ut, harum natus facilis, maxime nam impedit sed, cupiditate saepe debitis vel!
            Delectus illum vero molestias voluptate sed ducimus doloremque accusantium fugiat ipsa quae ea unde, laboriosam culpa harum odit voluptates voluptatem alias fuga debitis dolorum corporis maiores ullam architecto repellendus! Molestias!</p>
    </div>
    <aside id="nav-container">
        <h3 id="tags-title">Tags</h3>
        <ul id="tag-list">
            <?php foreach ($currentPost['tags'] as $tag) : ?>
                <li><a href="#"><?= $tag ?></a></li>
            <?php endforeach; ?>
        </ul>
        <h3 id="categories-title">Categorias</h3>
        <ul id="categories-list">
            <?php foreach ($categories as $category) : ?>
                <li><a href="#"><?= $category ?></a></li>
            <?php endforeach; ?>
        </ul>
    </aside>
</main>
<?php
include_once('templates/footer.php');
?>