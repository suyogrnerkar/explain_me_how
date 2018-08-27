public class Animals {

  private String kind;
  private Pool similar_animals_pool;


  public static class Pool {
    private static int total_kinds = 0;
    private int self_count = 1;

    public Pool (Animals animal) {
      System.out.println("Pool instantiated! : " + animal.kind);
      System.out.println("- " + animal.kind + " Count: " + self_count);
      total_kinds++;
    }

    public int get_self_count () {
      return self_count;
    }

    public void set_self_count(int count) {
      this.self_count = count;
    }

    public int get_total_kinds () {
      return total_kinds;
    }
  }


  public Animals (String kind) {
    System.out.println("Instantiated: Animal : " + kind);
    this.kind = kind;
    this.similar_animals_pool = new Pool(this);
  }

  public Pool get_similar_animals_pool() {
    return similar_animals_pool;
  }

}

